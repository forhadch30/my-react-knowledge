import PropTypes from 'prop-types'
import {FaBookmark} from 'react-icons/fa'
const Blog = ({blog,handleAddToBookmark , handleMarkAsRead}) => {
  const {title, cover, hashtags,reading_time, author_img, author,posted_date} = blog;
    return (
        <div className='mb-10 space-y-4'> 
            <img className='w-full mb-8 ' src={cover} alt={`cover${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-orange-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
            {
                hashtags.map((hahs,idx) => <span key={idx}><a href="">#{hahs}</a></span>)
            }
            </p>
           <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-500 font-bold underline'>Make As Read</button>
        </div>
    );
};
    Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;