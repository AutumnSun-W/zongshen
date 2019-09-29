import Mock from 'mockjs'

var data = ({
    "product|1":[
        {
            'name':'@name',
            'price':'@integer(8000,40000)',
            'detail':'@paragraph',
            'remain':'@integer(0,100)',
            'focus':'@integer(0,100)',
            'addlove':'@integer(0,100)',
            'img':'@image(464×279)'
        }
    ]
})
Mock.mock('http://www.bb.com/api',data)