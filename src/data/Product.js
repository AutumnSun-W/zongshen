import Mock from 'mockjs';
var data = ({
    "list|5-10":[
        {
            "id|+1":1,
            "name":"@cname()",
            "price":9000,
            "img":"../assets/1.jpg"
        }
        
    ]
})

Mock.mock("http://www.aa.com/api",data)