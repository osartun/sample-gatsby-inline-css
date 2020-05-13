// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from './page2.module.scss'

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1 className={styles.somePage2Style}>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
