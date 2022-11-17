<script>
 const movies = [
              {
                name: "Batman",
                available: 5,
                quantity: 0,
              },
              {
                name: "Hombre del Norte",
                available: 4,
                quantity: 0,
              },
              {
                name: "Capitan America",
                available: 10,
                quantity: 0,
              },
            ];

</script>

{#each movies as movie}
<form>
  <h3>{movie.name}</h3>
  <button type="button" on:click={()=>movie.quantity -=1} disabled={movie.quantity <=0}>
    -
  </button>
  {movie.quantity}  
  <button type="button" on:click={()=>movie.quantity +=1} disabled={movie.quantity >= movie.available}>
    +
  </button>

 </form>
{/each}
