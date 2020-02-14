<template>
<div class="home">
  <h1  class="subheading grey--text" >HomePage</h1>
   <v-progress-linear
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>
  <p  class="black--text "> A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a landing page to attract visitors.[1][2] The home page is used to facilitate navigation to other pages on the site by providing links to prioritized and recent articles and pages, and possibly a search box.</p>

<p class="blue lighten-4 black--text text--darken-4">If a home page has not been created for a web site, many web servers will default to display a list of files located in the site's directory, if the security settings of the directory permit.[9] This list will include hyperlinks to the files, allowing for simple file sharing without maintaining a separate HTML file.</p>
<v-progress-linear
      indeterminate
      color="red darken-2"
      buffer-value="50"
      stream
    ></v-progress-linear>
<h1 class="display-4">Larger Text</h1>
 
<h4 class="display-1">Small Text</h4>
<p class="headline font-weight-bold">This is a HeadLine</p>
<p class="subheading">this is a subheading</p>
<p class="caption font-italic font-weight-bold">this is a caption</p>
 <v-progress-linear
      color="red"
      height="20"
      value="80"
      striped
    ></v-progress-linear> 
<v-content>
<v-btn  large class="pink white--text mx-5">clickME</v-btn>


<v-btn depressed dark color="pink" class="mx-5"  small rounded>clickme</v-btn>


<v-btn rounded color="pink white--text " class="mx-5">Click</v-btn>


<v-btn depressed class="pink white--text mx-5">
<v-icon>email</v-icon>
<span>emailme</span>

</v-btn>


<v-btn dark fab large depressed color="purple white--text mx-5">
<!-- <span>emailme</span> -->

<v-icon>favorite</v-icon>

</v-btn>
</v-content>
</div>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>
