import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>
          <ExtLink href="https://www.linkedin.com/in/vivekhotti/">
            LinkedIn
          </ExtLink>
          {' | '}
          <ExtLink href="https://github.com/Vivek-Hotti">
            GitHub
          </ExtLink>
          {' | '}
          <ExtLink href="mailto:vivekshotti@gmail.com">
            Mail
          </ExtLink>
          {' | '}
          <ExtLink href="https://www.facebook.com/vivek.hotti.9/">
            Facebook
          </ExtLink>
         {' | '}
          <ExtLink href="https://www.instagram.com/vivek_hotti/">
            Instagram
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
