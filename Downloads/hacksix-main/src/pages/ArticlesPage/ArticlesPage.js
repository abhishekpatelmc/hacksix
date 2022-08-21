import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown'

import { ArticleData } from "../../asset/data";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { findCellByName } from '../../utils/helpers.js'
import './Articles.css'
import { Typography } from "@mui/material";

function ArticlesPage() {
  const [chapterArr, setChapterArr] = useState();
  let { moduleString, id } = useParams();
  console.log("The module string is "+moduleString);
  console.log("The ID is "+id);


  //useEffect(()=> {
    //setChapterArr(findCellByName(moduleString, ArticleData));
  //}, [moduleString])

  const chapArr = findCellByName(moduleString, ArticleData);
  //console.log(chapArr);


  const getArticle = (arr, id) => {
    for(var j = 0; j<arr.length; j++) {
      console.log("iterations")
      console.log(arr[j]);
      if(arr[j].chapterPath === id) return arr[j];
    }
  }

  const Article = getArticle(chapArr.chapters, id);
  //console.log(Article);

  return (
    <div className="container-article">
      <div className="partition-1-article">
        <SideNavBar chapterOptions={chapArr.chapters}/>
      </div>
      <div className="partition-2-article">
        <div className="article-box">
          <Typography variant= "h3" align="center">
            {chapArr.title}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {chapArr.desc}
          </Typography>
          <Typography variant="h5">
            <ReactMarkdown children={Article.chapterContent} />
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
