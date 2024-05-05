import React from 'react'

import "./PostCard.css"

const PostCard = ({ post }) => {


    const CapitalizeWord = (mySentence) => {
        const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        return finalSentence
    }



    return (
        <div className='postcard_container'>
            <div className="container" >
                <div className="card" >
                    <div className="card__header">
                        <img src={`https://source.unsplash.com/600x400/?${["textures-patterns", "technology", "tech", "digital", "network"][Math.floor((Math.random() * 5))]}`} alt="card__image" className="card__image" width="600" />
                    </div>
                    <div className="card__body">
                        {/* <span className="tag tag-blue">Technology</span> */}
                        <h4>{post.title}</h4>
                        <p className='card_content'>{post.content}</p>
                        <button className='bg-orange-200 w-32 h-8 rounded-full'>Read more..</button>
                    </div>

                    <div className="card__footer">
                        <div className="user">
                            <img src={`https://i.pravatar.cc/40?img=${Math.floor((Math.random() * 70) + 1)}`} alt="user__image" className="user__image" />
                            <div className="user__info">
                                <h5>{CapitalizeWord(post.author.name)}</h5>
                                <small>{post.publishedAt.toDateString()}</small>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PostCard