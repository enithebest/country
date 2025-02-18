<script>
  import { goto } from '$app/navigation';
  export let data;

  function navigateToCountry(country) {
    const encodedCountry = encodeURIComponent(country); // Handle special characters
    goto(`/country/${encodedCountry}`);
  }
</script>

<h1>List of Countries</h1>

{#if data.countries?.length > 0}
  <ul>
    {#each data.countries as country}
      <li on:click={() => navigateToCountry(country)} style="cursor: pointer; color: blue; text-decoration: underline;">
        {country}
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading or no data available.</p>
{/if}
