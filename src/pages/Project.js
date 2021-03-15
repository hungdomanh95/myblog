import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout';
import Button from "../components/button"
const Project = () => {
    return (
        <Layout>
            Project
            <Link to="/">
                <Button marginTop="85px">Go Home</Button>
            </Link>
        </Layout>
    )
}

export default Project
