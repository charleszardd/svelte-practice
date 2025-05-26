<script lang="ts">
    const services = $state([
        { name: "Web Development", description: "this is web development" },
        { name:  "Machine Learning", description: "this is machine learning" },
        { name: "Data Science", description: "This is data science" }
  
    ]);
</script>

<main>
    {#each services as service, index }
        <div class="bg-white rounded-lg card grid grid-cols-1">
           <strong>{service.name}</strong>
           <p>{service.description}</p>
        </div>
    {/each}
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
.card{

    width: 100%;
    max-width: 500px;
    padding: .5rem;
    margin-top: 20px;
}
</style>