import RichTextArea from 'components/RichTextArea';
import { getContentList } from 'helpers/getContentList';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/components/resource-list.module.scss';

const ResourceList = ({ module, customData }) => {

    const { title, description, cTA } = module.fields;
    const resourceList = customData.contentList;

    return (
        <section className={styles.resource_list}>
            <div className="container">
                <div className="content">
                    {title && <h2 className="minor">{title}</h2>}
                    <div className={styles.grid}>
                        <div className={styles.left}>
                            <hr />
                            <div className={styles.description}>
                                {description && <RichTextArea html={description} />}
                            </div>
                            {cTA && <Link href={cTA.href}><a target={cTA.target} className="btn">{cTA.text}</a></Link>}
                        </div>
                        <div className={styles.right}>
                            {resourceList && (
                                <ul className={styles.resource_list}>
                                    {resourceList.map((resource, index) => {
                                        console.log(resource);
                                        return (
                                            <li className={styles.resource} key={`resource-item-${index}`}>
                                                {resource.title && <h3>{resource.title}</h3>}
                                                <div className={styles.resource_description}>
                                                    {resource.description && <RichTextArea html={resource.description} />}
                                                </div>
                                                {resource.resourceDocument && <Link href={resource.resourceDocument.url}><a target="_blank" className="btn">{resource.resourceDocument.label}</a></Link>}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ResourceList.getCustomInitialProps = async ({
    agility,
    languageCode,
    item
}) => {
    return getContentList(agility, item.fields.resourceList.referencename, languageCode);
}

export default ResourceList;