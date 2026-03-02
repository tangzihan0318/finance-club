import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Link from "next/link";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Link 
              href="/lecture-review"  // 点击后跳转到这个路径
              className="group block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
                📚 Lecture Review
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                点击查看往期讲座回顾、笔记和重点内容
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center">
                点击进入 →
              </span>
            </Link>

            {/* Latest Resources 卡片 - 点击进入资源页面 */}
            <Link 
              href="/latest-resources"  // 点击后跳转到这个路径
              className="group block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
                📄 Latest Resources
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                点击获取最新学习资料、课件和工具
              </p>
              <span className="text-blue-600 font-medium inline-flex items-center">
                点击进入 →
              </span>
            </Link>

          </div>

          {/* 可选：社团活动信息 */}
          <div className="mt-16 text-center p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              📍 每周二社团活动
            </h3>
            <p className="text-gray-600">
              时间：每周二下午4点 | 地点：Room 12
            </p>
            <p className="text-gray-500 mt-2">
              欢迎所有对金融感兴趣的同学参加！
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
