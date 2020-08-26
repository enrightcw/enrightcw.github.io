import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Chris. I'm a full stack engineer with experience in Design, UI/UX, Express JS, Node JS, MongoDB, and React.</p>

            <p>I have always loved technology and while my background comes from Project Management, I like nothing more than actually digging into code and create my own websites.</p>

            <p>I am happiest when I'm learning new things and am currently working on gaining more experience with MongoDB, React, Express JS, and Node JS.</p>

            <p>My latest project, Grubble, is an app which allows you to remove the stress that comes along with making a decision for dinner or a night out. You can check out the repo here: <a href="https://github.com/enrightcw/project3" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with React, MongoDB, Express JS, and Node JS.</p>

            
            </Content>
        </div>
    );

}

export default AboutPage;
