import RichTextArea from 'components/RichTextArea';
import React from 'react';

const BasicCopy = ({ module }) => {
    return (
        <section>
            <div className="container">
                <div className="content">
                    <RichTextArea html={module.fields.textblob} />
                </div>
            </div>
        </section>
    );
};

export default BasicCopy;