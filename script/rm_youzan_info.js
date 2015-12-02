(function(){
    /**
     * 移除微信文章的标题, 发布时间 作者信息
     */
    document.getElementById('activity-name').innerHTML = '';
    document.getElementsByClassName('rich_media_meta_list')[0].innerHTML = '';
    /**
     * 底部
     */
    document.getElementsByClassName('footer')[0].innerHTML = '';
    /**
     * 把container变为白色
     */
    document.getElementsByClassName('container')[0].style.backgroundColor = '#FFFFFF';
})();
