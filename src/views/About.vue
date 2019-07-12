<template>
  <div class="main-inner">
    <h2>Summary</h2>
    <div id="summary" class="content-block">
      <p>
        Seasoned Web Developer with a focus on front-end development.
        Experienced in all stages of web site &amp; application development from
        concept to deployment. 2018 Grow with Google scholarship recipient and
        graduate of the Mobile Web Specialist Nanodegree program by Udacity.
        Strong business background with an Associate of Arts - AA degree in
        Business Administration from Howard Community College.
      </p>
    </div>
    <h2>Technical Skills</h2>
    <div class="content-block">
      <ul>
        <li><span>HTML/CSS</span> - semantic html, responsive web design</li>
        <li><span>JavaScript</span> - ECMAScript 2015+ (ES6), jQuery</li>
        <li><span>React</span> - learning in progress...</li>
        <li><span>Vue.js</span> - Vue CLI, learning in progress...</li>
        <li><span>Node.js</span> - npm, front-end related tasks</li>
        <li><span>Git/Git Bash</span> - version control, Git command line</li>
        <li><span>Web Hosting</span> - Cpanel, AWS</li>
        <li>
          <span>LAMP Stack</span> - PHP/MySQL (intermediate, especially
          WordPress related)
        </li>
        <li><span>WordPress</span> - Genesis Framework, theme development</li>
        <li><span>WebGL</span> - Three.js Framework, just for fun :)</li>
      </ul>
    </div>
    <h2>Education</h2>
    <div id="edu-items" class="content-block">
      <h3>Business Administration, Associate of Arts - AA</h3>
      <p>
        Howard Community College
        <br />Graduated Spring 2014
      </p>
    </div>
    <h2>Experience</h2>
    <div id="exp-items" class="content-block">
      <h3>React Nano</h3>
      <p>
        April 2019 - Present
        <br />Professional React Developer nanodegree by Udacity
      </p>
      <h3>Mobile Web Specialist</h3>
      <p>
        April 2018 - October 2018
        <br />6-month advanced web development nanodegree by Udacity
      </p>
      <h3>Grow with Google Developer Challenge Scholarship</h3>
      <p>
        January 2018 - April 2018 (3-month)
        <br />Top 10% awarded full scholarship to the Mobile Web Specialist
        nanodegree program by Udacity in partnership with Google
      </p>
      <h3>Self-taught Web Developer</h3>
      <p>Since 2015</p>
    </div>
    <div id="resume" class="content-block"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-inner {
  font-size: 1rem;
  padding: 0 0.5em;
}

.content-block {
  padding-bottom: 10px;
}

@media (min-width: 600px) {
  .main-inner {
    font-size: 1.2rem;
    padding: 2em 2em 0;
  }
}

@media (min-width: 960px) {
  .main-inner {
    font-size: 1.3rem;
    padding: 2em 3em 0;
  }
  .content-block {
    padding-left: 1em;
  }
}

@media (min-width: 1440px) {
  .main-inner {
    font-size: 1.4rem;
    padding: 2em 3.5em 0;
  }
}

.content-block img {
  height: 48px;
  width: 48px;
}

h2 {
  border-bottom: 4px solid #57c4d0;
  color: #fff;
  display: inline-block;
  margin-bottom: 5px;
}

.content-block h3 {
  color: #fff;
  font-size: 1.25em;
  font-weight: bold;
  margin: 0.75em 0 0;
}

#exp-items p,
#edu-items p {
  margin-top: 0;
}

.content-block ul {
  list-style: none;
  margin: 0.5em 0;
  padding-left: 0;
}

/* list-style: none accessibility fix for Safari (Mozilla.org) */
.content-block ul li::before {
  content: "\200B";
}

li {
  margin-top: 0.75em;
}

.content-block ul li span {
  color: #57c4d0;
  font-size: 1.1em;
}

#summary {
  font-size: 1.2em;
}

#resume {
  height: 100px;
}
</style>
