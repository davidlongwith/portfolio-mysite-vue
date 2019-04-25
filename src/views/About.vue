<template>
  <div class="main-inner">
    <h2>Summary</h2>
    <div class="content-block">
      <p>
        Seasoned Web Developer with a focus on front-end development. Skilled in
        creating responsive web sites &amp; applications to run on any device.
        2018 Grow with Google scholarship recipient and graduate of the Mobile
        Web Specialist Nanodegree program by Udacity. Strong business background
        with an Associate of Arts - AA degree in Business Administration from
        Howard Community College.
      </p>
    </div>
    <h2>Key Skills</h2>
    <div class="content-block">
      <ul>
        <li><span>HTML/CSS</span> - semantic html, responsive web design</li>
        <li><span>JavaScript</span> - ECMAScript 2015+ (ES6)</li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>semantic html</li>
        <li>responsive web design</li>
      </ul>
      <h3>JavaScript</h3>
      <ul>
        <li>ECMAScript 2015+</li>
        <li>jQuery</li>
        <li>Vue (beginner)</li>
        <li>Node.js (beginner)</li>
      </ul>
      <h3>Key Skills:</h3>
      <p>
        HTML/CSS &bull; JavaScript &bull; Responsive Web Design &bull;
        Progressive Web Applications &bull; Git/Git Bash &bull; Web
        Hosting(Cpanel, AWS Lightsail)
      </p>
      <h3>Current Focus:</h3>
      <p>
        Mastering JavaScript
        <br />Front-End Frameworks - Vue, React <br />Full-Stack Development
        with Node.js
      </p>
      <h3>Previous Exp:</h3>
      <p>LAMP Stack &bull; WordPress(Genesis Framework, theme development)</p>
      <h3>Just for Fun:</h3>
      <p>WebGL &bull; Three.js Framework</p>
    </div>
    <h2>Education</h2>
    <div class="content-block">
      <p>
        Business Administration, Associate of Arts - AA
        <br />Howard Community College <br />Graduated Spring 2014
      </p>
    </div>
    <h2>Experience</h2>
    <div class="content-block">
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
      <p>
        Self-taught Web Developer
        <br />Since 2015
      </p>
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
  color: #fff;
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

.content-block img {
  height: 48px;
  width: 48px;
}

h2 {
  border-bottom: 4px solid #57c4d0;
  display: inline-block;
  margin-bottom: 5px;
}

.content-block h3 {
  color: #57c4d0;
  font-weight: bold;
  margin: 0.5em 0;
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

.content-block ul li span {
  color: #57c4d0;
  font-size: 1.2em;
}

#resume {
  height: 100px;
}
</style>
