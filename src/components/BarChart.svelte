<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";


  let data = [];
  let selectedMeasure = "Score"; 

  const fetchData = async () => {
      const response = await fetch("/data.json");
      data = await response.json();
      updateChart();
  };

  fetchData();

  function updateChart() {
      const width = 800, 
            height = 500, 
            margin = { top: 20, right: 40, bottom: 40, left: 150 };

      const sortedData = [...data].sort((a, b) => b[selectedMeasure] - a[selectedMeasure]);

      const xScale = d3.scaleLinear()
          .domain([0, d3.max(sortedData, d => d[selectedMeasure])])
          .range([0, width - margin.left - margin.right]);

      const yScale = d3.scaleBand()
          .domain(sortedData.map(d => d.Country))
          .range([0, height - margin.top - margin.bottom])
          .padding(0.1);

      const svg = d3.select("#chart")
          .attr("width", width)
          .attr("height", height)
          .select("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

      const bars = svg.selectAll("rect").data(sortedData, d => d.Country);

      bars.enter()
          .append("rect")
          .merge(bars)
          .transition().duration(1000)
          .attr("x", 0)
          .attr("y", d => yScale(d.Country))
          .attr("height", yScale.bandwidth())
          .attr("width", d => xScale(d[selectedMeasure]))
          .attr("fill", "steelblue");

      bars.exit().remove();


      const labels = svg.selectAll("text.value-label").data(sortedData, d => d.Country);

      labels.enter()
          .append("text")
          .attr("class", "value-label")
          .attr("x", d => xScale(d[selectedMeasure]) + 5)
          .attr("y", d => yScale(d.Country) + yScale.bandwidth() / 2 + 4)
          .text(d => d[selectedMeasure])
          .style("fill", "black")
          .style("font-size", "12px")
          .merge(labels)
          .transition().duration(1000)
          .attr("x", d => xScale(d[selectedMeasure]) + 5)
          .attr("y", d => yScale(d.Country) + yScale.bandwidth() / 2 + 4)
          .text(d => d[selectedMeasure]);

      labels.exit().remove();

      svg.selectAll(".axis").remove(); 

      svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale))

      svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
  }

  function changeMeasure(measure) {
      selectedMeasure = measure;
      updateChart();
  }
</script>

<div>
  {#each Object.keys(data[0] || {}).slice(1) as measure}
      <button on:click={() => changeMeasure(measure)}>{measure}</button>
  {/each}
</div>

<svg id="chart">
  <g class="y-axis"></g>
</svg>

<style>
  button {
      margin: 5px;
      padding: 8px;
      cursor: pointer;
      
  }

  button:active {
      background-color: gray;

  }
</style>

