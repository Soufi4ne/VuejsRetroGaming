<template>

  <div id="app">
    <div class="product-display">
      <div class="product-container">
        <div class="product-cover">
          <img v-bind:src="cover">
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>{{description}}</p>
          <p>Nombre de joueur : {{nombreJoueur}}</p>
          <!-- <p v-if="nombreJoueur == 1">Experience Solo inoubliable !</p>
          <p v-else-if="nombreJoueur >= 2 && <= 4">Ideal pour une soirée entre potes</p>
          <p v-else>Parfait pour les grosses fetes ou tournois</p>
           -->
           <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <div v-for="plateforme in plateformes" key="plateforme.id" >{{plateforme.console}}</div>
          <br>
          <a href={{url}}>Plus d'informations sur le jeu</a>
          <p style="color: green" v-if="inStock">Disponible !</p>
          <p style="color: red;" v-else>Rupture de Stock !</p>
          
        </div>
      </div>
    </div>
  </div>


  <!-- Import Js (Import App dans courses) -->
  <!-- <script src="./main.js"></script> -->

  <!-- Mount App -->
  <!-- <script> -->
    <!-- const mountedApp = app.mount("#app") -->
  <!-- </script> -->


</template>

<script src="./main.js">

const mountedApp = app.mount("#app")
export default {
    name: 'MainContent',
    props: {
        msg: String
    }
}

// import main from '../main'
</script>