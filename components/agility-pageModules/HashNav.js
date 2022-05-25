import React from 'react';

const HashNav = ({ module }) => {

    const { title } = module.fields;

    return (
        <section id={title}><div className="offset-header"></div></section>
    );
};

export default HashNav;