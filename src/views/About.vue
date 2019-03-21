<template>
  <div class="main-inner">
    <div class="content-block">
      <h2>Summary</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="content-block">
      <h2>Skills</h2>
      <h3>Key Skills:</h3>
      <p>
        HTML/CSS &bull; JavaScript &bull; Responsive Web Design &bull;
        Progressive Web Applications &bull; Git/GitHub &bull; Bash Command Line
        &bull; Web Hosting(Cpanel, AWS Lightsail, Email)
      </p>
      <h3>Actively Learning:</h3>
      <p>
        Front-End Frameworks - Vue, React
        <br />Full-Stack Development with Node.js, experimenting with Java and
        .NET
      </p>
      <h3>Previous Exp:</h3>
      <p>LAMP Stack &bull; WordPress(Genesis Framework, theme development)</p>
      <h3>Just for Fun:</h3>
      <p>WebGL &bull; Three.js Framework</p>
    </div>
    <div class="content-block">
      <h2>Education</h2>
      <p>
        Business Administration, Associate of Arts - AA <br />Howard Community
        College <br />Graduated Spring 2014
      </p>
    </div>
    <div class="content-block">
      <h2>Experience</h2>
      <p>
        Mobile Web Specialist
        <br />April 2018 - October 2018 <br />6-month advanced web development
        nanodegree by Udacity
      </p>
      <p>
        Grow with Google Developer Challenge Scholarship
        <br />January 2018 - April 2018 (3-month) <br />Top 10% awarded full
        scholarship to the Mobile Web Specialist nanodegree program by Udacity
        in partnership with Google
      </p>
      <p>Self-taught Web Developer <br />Since 2015</p>
    </div>
    <div id="resume" class="content-block"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-inner {
  font-size: 1.2rem;
  padding: 2em 3em 0;
}
.content-block {
  color: #fff;
}
.content-block img {
  height: 48px;
  width: 48px;
}
h2 {
  border-bottom: 4px solid #57c4d0;
  display: inline-block;
  margin-bottom: 5px;
}
h3 {
  color: #57c4d0;
  font-weight: bold;
  padding-left: 12px;
}
p {
  padding-left: 24px;
}
#resume {
  height: 100px;
}
</style>
