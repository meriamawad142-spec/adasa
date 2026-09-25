import React from "react";
import data from "../../Data/Data.json";
import { Link } from "react-router-dom";

export default function Home() {
  const categoryIcons = {
    إضاءة: "fa-sun",
    بورتريه: "fa-user",
    "مناظر طبيعية": "fa-mountain-sun",
    تقنيات: "fa-sliders",
    معدات: "fa-sun",
  };

  console.log(data);
  const featuredPosts = data.posts.slice(0, 3);

  const featuredPosts2 = data.posts.slice(3, 6);
  const featuredcategories = data.categories;

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                <span>استكشف المقالات</span>
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-transform"></i>
              </button>
              <button className="btn-secondary inline-flex items-center justify-center gap-2">
                <i className="fa-solid fa-circle-info"></i>
                <span>اعرف المزيد</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 text-center md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +50
              </p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +10ألف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
              <p className="text-neutral-500 text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative *:">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span class="section-label  mb-4">
                <span class="relative flex h-2 w-2 ml-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                مميز
              </span>
              <h2 className=" font-bold text-5xl text-white mb-3">
                مقالات مختارة
              </h2>
              <p className="section-subtitle text-neutral-400 ">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              className="group cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
            >
              عرض الكل
              <i className="fa-solid fa-angle-left w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
            </Link>
          </div>
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="block">
                <div
                  key={post.id}
                  className="group cursor-pointer relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-[400px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock"></i>{" "}
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300  font-bold text-white mb-3">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-3 items-center">
                          <div className="relative ">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">
                              {post.author.name}
                            </p>
                            <p className="text-gray-500 text-xs">{post.date}</p>
                          </div>
                        </div>
                        <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          اقرأ المقال
                          <i className="fa-solid  fa-arrow-left"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              التصنيفات
            </span>
            <h2 className="section-title font-bold text-white">
              استكشف حسب الموضوع
            </h2>
            <p className="section-subtitle max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredcategories.map((category) => (
              <Link
                to={`/blog?category=${category.name}`}
                key={category.name}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626]
  overflow-hidden hover:border-orange-500/30 transition-all
  duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <i
                      className={`fa-solid ${categoryIcons[category.name]} text-xl text-orange-500  group-hover:text-white transition-colors duration-300  `}
                    ></i>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <i className="fa-solid fa-angle-left   text-white"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                الأحدث
              </span>
              <h2 className="section-title font-bold text-white">
                أحدث المقالات
              </h2>
              <p className="section-subtitle max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              to="/blog"
            >
              عرض جميع المقالات{" "}
              <i className="group-hover:-translate-x-1 transition-transform fa-solid fa-arrow-left-long"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts2.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <article className="group card hover:-translate-y-1 overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <i class="fa-regular fa-clock"></i> {post.readTime}
                      </span>
                      <span class="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span>
                        {new Date(post.date).toLocaleString("ar-EG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}{" "}
                    </h3>
                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                        />
                        <div>
                          <p class="text-sm font-medium text-white">
                            {post.author.name}
                          </p>
                          <p class="text-xs text-neutral-500">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                        <i className=" fa-solid fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-envelope fa-xl text-white"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span class="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 ">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse ">
                  {featuredPosts.map((post) => (
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-[#161616]"
                      src={post.author.avatar}
                      alt={post.author.name}
                    ></img>
                  ))}
                </div>
                <span>
                  انضم لـ <span class="text-white font-medium">+10,000</span>{" "}
                  مصور
                </span>
              </div>
              <span class="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span class="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
