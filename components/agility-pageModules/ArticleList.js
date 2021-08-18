import { getContentList } from 'helpers/getContentList';
import React from 'react';

const ArticleList = ({ module, customData }) => {
    console.log(customData);

    return (
        <section>
            <div className="container">
                <div className="content">
                    Article List
                </div>
            </div>
        </section>
    );
};

ArticleList.getCustomInitialProps = async ({
    agility,
    languageCode
}) => {
    return getContentList(agility, 'articles', languageCode);
}

export default ArticleList;