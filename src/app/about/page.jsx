import Heading from "../components/Heading";
export const metadata = {
  title: "About Page"
}

function About() {
  return (
    <div>
      <Heading size={2}>About</Heading>
      <p>This is the about page
        and other stuff about the page. I'm not sure what to put here.
      </p>
    </div>
  )
}

export default About;