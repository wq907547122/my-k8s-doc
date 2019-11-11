module.exports = {
  title: '搭建学习K8S的文档',
  description: '记录学习的信息',
  base: '/my-k8s-doc/',
  dest: './dist',
  port: '8888',
  head: [
      ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
    // 右上角的导航栏
    nav: [
      {
        text: '指南',
        link: '/zh/guide/'
      }
    ],
    sidebar: {
      '/zh/guide/': [
        {
          title: '网格',
          collapsable: false,
          children: genMeshSidebar('/zh')
        }
      ]
    },
    sidebarDepth: 4,
  }
}
// 获取网格的侧边导航栏
function genMeshSidebar(type) {
    const mapArr = [
        '/guide/',
        '/guide/k8s/k8s-start.md',
        '/guide/k8s/k8s-summary.md',
        '/guide/k8s/k8s-construct.md',
        '/guide/k8s/k8s-cal-volume.md',
        '/guide/k8s/k8s-extend.md',
        '/guide/k8s/k8s-container.md',
        '/guide/k8s/k8s-workload.md',
        '/guide/k8s/k8s-storage.md',
        '/guide/k8s/k8s-config.md',
        '/guide/k8s/k8s-service-network-load.md',
        '/guide/k8s/k8s-security.md',
        '/guide/k8s/k8s-scheduling.md',
        '/guide/k8s/k8s-strategy.md',
        '/guide/k8s/k8s-install-minikube.md',
        '/guide/k8s/k8s-f.md'
    ]
    return mapArr.map(item => {
        return type + item
    })
}