// 侧边栏访问统计
fetch('https://v6-widget.51.la/v6/K3C3rxPX9ZnLFSM9/quote.js').then(res =&gt; res.text()).then((data) =&gt; {
	let title = ['最近活跃访客', '今日访问人数', '今日访问量', '昨日人数', '昨日访问量', '本月访问量', '总访问量']
	let num = data.match(/(?&lt;=&lt;\/span&gt;<span>).*?(?=&lt;\/span&gt;&lt;\/p&gt;)/g)
	let s = document.querySelectorAll('#visitor .content')[0]
	if (s !== undefined) {
		for (let i = 0; i &lt; num.length; i++) {
			if (i == 3 || i == 4) continue;
			s.innerHTML += '<div><p><span id="name">' + title[i] + '</span><span class="num">' + num[i] + '</span></p></div>'
		}
	}
}); 


// 确保其他页面（如第二页）第一篇文章不添加
if (location.pathname == '/') newPost();

// 最新文章函数
function newPost() {
    // 获取所有文章信息
    let ls = document.querySelectorAll('.recent-post-info')
    // 先让时间和索引值都等于第第一篇文章的
    let time = new Date(ls[0].querySelector('.post-meta-date-created').getAttribute('datetime')).getTime();
    let index = 0
    // 遍历数组，如果有时间比time大（更新的文章）则替换
    ls.forEach((i, num) =&gt; {
        let t = new Date(i.querySelector('.post-meta-date-created').getAttribute('datetime')).getTime()
        if (t &gt; time) {
            time = t;
            index = num
        }
    })
    // 单数在右，双数在左
    let className = index % 2 == 0 ? 'newPost-right' : 'newPost-left'
    ls[index].innerHTML += '<span class="' + className + '">最 新</span>';
    // 如果你不想让其一左一右，可以注释上面的启用下面的，默认左，left改成right就是右
    // ls[index].innerHTML += '<span class="newPost-left">最 新</span>';
}
</span>