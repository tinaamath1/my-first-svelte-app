<script>
  import BarChart from "$components/BarChart.svelte";
  // import data from "$data/data.json";
  // console.log(data);


</script>

<main>
  <h1>Top Migration Destinations</h1>
  <h2>
    The Henley Opportunity Index measures how higher education, combined with investment-based residence or citizenship, helps preserve and grow wealth across generations.
  </h2>
  <h3>Click measures below to see how countries score compares.</h3>
  <BarChart />
  <footer>
    <!-- For help, <a
      href="https://twitter.com/CL_Rothschild"
      target="_blank"
      rel="noopener noreferrer">DM Connor on Twitter ✉️</a
    > -->
  </footer>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f0f0f0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.5;
    width: 1000px;
  }

  h3{
    margin-bottom: 2rem;
  }
  

  pre {
    padding: 1px 6px;
    display: inline;
    margin: 0;
    background: #ffb7a0;
    border-radius: 3px;
  }

  a {
    color: #ff3e00;
    text-decoration: inherit;
  }

  footer {
    font-size: 1rem;
    color: #333;
  }
</style>
