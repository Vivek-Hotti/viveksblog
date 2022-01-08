import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>
          <ExtLink href="https://www.linkedin.com/in/vivekhotti/">
            LinkedIN
          </ExtLink>
          {' | '}
          <ExtLink href="https://github.com/Vivek-Hotti">
            GitHub
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
