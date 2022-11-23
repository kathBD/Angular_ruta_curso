<script>
  import  Form from "./Form.svelte";
  // @ts-ignore
  import {title} from "./styles.js"
</script>

<main>
 <h2 class="{title}">
 Películas
 <h2>

 <Form/>

</main>

<style>
  :global(body){
    --bg: #ebd10e;
    --color: #91add3;
    --color2: #548ca8;
    --color3: #334257;
    background: var(--bg);
    color: var(--color);
    margin: 0;
  }
</style>

