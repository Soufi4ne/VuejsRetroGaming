<template>
  <div class="container mx-auto">
    <h2 class="py-4 text-3xl font-bold text-center text-indigo-600 ">
      Sealed Video Games
    </h2>
    <div  v-if="images != []" class="lg:gap-2 lg:grid lg:grid-cols-3 group border-indigo-500 hover:bg-white">
      <div class="w-full rounded hover:scale-125"  v-for="img in images" :key="img.id">
      <!-- {{
        
        img.attributes.image.data[0].attributes.caption   }} -->
        <div class="fullwrap">
          <img class="gameImage" :src="img.attributes.image.data[0].attributes.caption" alt="image" />
           <div class="fullcap">
               {{
        
        img.attributes.detail   }}<br>
              <button class="buy">BUY</button>
            </div>
        </div>
      </div>
         
  </div>
      </div>
</template>
<script>
//import { env } from 'process';

export default {
  data() {
    return {
      images: [

        // {
        //   id: 1,
        //   photo:
        //     'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-sunshine/6/67/Super-mario-sunshine-1920x1080.jpg',
        // },
        // {
        //   id: 2,
        //   photo:
        //     'https://www.lp.zone/uploads/default/original/3X/e/6/e6b4120da9d59a2cc0b7961490557e7d2b451b27.jpeg',
        // },
        // {
        //   id: 3,
        //   photo:
        //     'https://cdn.wallpapersafari.com/26/4/S73iQu.jpg',
        // },
        // {
        //   id: 4,
        //   photo:
        //     'https://images7.alphacoders.com/532/thumb-1920-532007.jpg',
        // },
        // {
        //   id: 5,
        //   photo:
        //     'https://techgameworld.com/wp-content/uploads/2021/04/Retrogaming-Mario-Kart-Double-Dash-Racing-doubly-insane.jpg',
        // },
        // {
        //   id: 6,
        //   photo:
        //     'https://preview.redd.it/515dk9mk01971.png?width=1920&format=png&auto=webp&s=8883df32d3aa9a2038754438014f65494a3da85f',
        // },
      ],
      headers : {'Content-Type': 'application/json'},
      error : null, 
    };
  },
  methods : {
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },

    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    }

  },
  async mounted (){

    try {
      const qs = require('qs')
        const query = qs.stringify({
           populate:'*'
        })
      const response = await fetch("http://localhost:1337/api/games?token="+process.env.strapi_Image_Token+"&"+query, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      this.images = response.data
      console.log(this.images) 

    } catch (error) {
      this.error = error
    }
  }
    

  
};
</script>

<!-- <script>
export default {
    data() {
        return {
            images: [],
        }
    },

    mounted() {
        fetch("http://localhost:1337/api/games/?populate=*").then(
            (res) => res.json()
        ).then((data) => {
            this.games = data
        })
    }
}
</script> -->
