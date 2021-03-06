import { useEffect } from 'react'
import Head  from 'next/head'
import { Header, Navbar, Result } from '../components'
import axios from 'axios';

export default function Home({results }) {
  
  useEffect(()=>{
   console.log('results :' , results);
   
  },[])
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>hulu 2.0.0</title>
        <meta name="description" content="huhlu app" />
        <link rel="icon" href="/favicon.ico" />
        <link 
         href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUVFTD7u7vTOamp0uDQ0OCQAAAAAAAAAAAAAAAD4+QBhPT1EVAAAAAAAAAAAAAAAAAAAAAAAAAAD///8n////r/////j////7/////P////Da2t6Vh4eKQ////7f////1////gQAAAAAAAAAAAAAAAAAAAAD///88////7////7P+/v/n///////////////2/////v/////Hx8luMTIzBgAAAAEAAAAAAAAAAAAAAAD///8S////5////7qVlZngMjI0/8TExf9cXF3/PT1A/7Kyt7P////d39/jxBUVFQIAAAAAAAAAAAAAAAAAAAAA////eP////7Ly8z9KCgq/x4eIP+zsrP/TU1O/ysrLf8oKCn/////+f////yjo6dFAAAAAAAAAAAAAAAAAAAAAP///8D//////////6qpq/+srK3///////////+SkpP/19fY///////////909PXjQAAAAAAAAAAAAAAAAAAAAD////Y////7SYmJ/86Ojr//////2BgYP+oqKn/7+7v/xEREf9OTk/0////6u7u8qQAAAAAAAAAAAAAAAAAAAAA////xv///5pLS07/FBQV/9PS0////////////2hoaf87Oz3/k5OX3v///7H///+PAAAAAAAAAAAAAAAAAAAAAP///4X///+2KCgp1BYWFv/l5Ob/SkpL/2xrbP/Lysv/FhYX/5WVmJr////m////SwAAAAAAAAAAAAAAAAAAAAD5+f8c////8P////3/////dHR1/0FBRP8tLS//4ODh///////////9////zOrp7QMAAAAAAAAAAAAAAAAAAAAAAAAAAP///1L////5/////+rq6+eTk5i8fHx/tP////n////+////5v///ycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Pf///8v////9////1v///+b////6////rv///x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8B////Kf///1D///9K////GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPwxAADwAQAA4AEAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADgBwAA8A8AAPg/AAD//wAA//8AAA=="
         rel="icon"
         type="image/x-icon"/>
      </Head>
      {/* header */}
      <Header />
      {/* navbar */}
      <Navbar/>
      {/* movies */}
      <Result results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const start = context.query?.start || 400;
  const limit = context.query?.limit || 500;

  const data =await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
    .then(res =>res.data)
    .catch(err =>console.log(err))
  
  return{
    props:{
      results : data
    }
  }
}
