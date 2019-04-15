<template lang="html">
  <div class="about">
    <div class="about-top">
      <h1>About Blog Template</h1>
    </div>
    <div class="about-content">
      <p>
        This site is a blog built with Vue, Vuex, Vue Router and Firebase as a
        serverless backend. The site was designed in Figma by me, Waleed. The
        goal of this site is that it is a generic template that I can quickly
        rebuild, recolor, and change Firebase configuration so that anyone can
        buy or use the template.
      </p>
      <p>
        Since I'm using CSS variables through the styles in the entire project,
        the idea is that I can swap colors and fonts quickly and easily for
        other people to use for their own version of the site.
      </p>
      <p>
        Firebase itself is also very easy to set up as well, compared to a full
        Node.js, Express, and MongoDB stack, and will only eventually require
        changing the Firebase API keys. Any special features that might be added
        will be mentioned here and on the home page as a blog post (yay!)
      </p>
      <br />
      <br />
      <p>
        There is a to-do list along with the source code on the
        <a href="https://github.com/Waldoz53/blog-template" target="_blank"
          >Github page here.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.about {
  background: white;
  margin-top: var(--margin);
  max-width: 800px;
  width: 95%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.about-top {
  text-align: center;
  background: var(--header-color);
  padding: var(--margin);
  color: var(--leading-text);
}
h1 {
  font-weight: 400;
}
.about-content {
  padding: var(--margin);
}
.about-content p {
  margin-bottom: var(--half-margin);
}
a {
  all: unset;
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
a:visited {
  color: purple;
}
/* anchor tag set to default styles so the link is actually visible and clickable */
</style>
