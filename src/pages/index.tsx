import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Labor Omnia Vincit</h1>
        <h2><i> Work Conquers All </i></h2><br />
        <h2>
          A Personal Blog of'{' '}
          <ExtLink
            href="https://www.linkedin.com/in/vivekhotti/"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            <b>Vivek Shivakumar Hotti</b>
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            👋Hey there, this is Vivek Shivakumar Hotti.
          </p>
          <p>
            I am a 3rd year undergrad majoring in Computer Science & Engineering from 
            University of Mumbai (India). Welcome to my personal blog. Here I usually 
            pen down what I Think, Percieve, Learn & Predict. (At least that's the plan
            for now)
          </p>
          <p>
            I keep keen interests in Algorithms, Backend Infrastructure Development, Machine Learning, 
            Finance, Economics, Web3.0 and other open ended areas of human advancement.
          </p>
          <p>
            Know more about me by hopping on to the Contact section or Contact me instantly through{' '}
            <ExtLink href="mailto:vivekshotti@gmail.com">
              Mail
            </ExtLink>
          </p>
        </div>
      </div>
    </>
  )
}
