import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, MessageSquare, CheckCircle, Send } from 'lucide-react';

export const ReviewsPage = () => {
  const { t, showToast } = useApp();

  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "Sardorbek Rahimov",
      rating: 5,
      date: "2026-09-19",
      text: "ASUS ROG noutbuk sotib oldim. Toshkent bo'ylab 3 soatda yetkazib berishdi! Mahsulot 100% original, kafolat qog'ozlari bilan. Rahmat!",
      verified: true
    },
    {
      id: 2,
      name: "Jasur Abdullayev",
      rating: 5,
      date: "2026-09-14",
      text: "Kompyuter yig'ish (PC Builder) xizmatidan foydalandim. RTX 4080 bilan yig'ib berishdi. Suvli sovutish va kabellar juda chiroyli taxlangan.",
      verified: true
    },
    {
      id: 3,
      name: "Elena Kim",
      rating: 4,
      date: "2026-09-08",
      text: "Отличный магазин! Консультанты вежливые, помогли выбрать монитор Samsung OLED. Бесплатная доставка.",
      verified: true
    }
  ]);

  const [newReviewer, setNewReviewer] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now(),
      name: newReviewer || 'Mijoz',
      rating: Number(newRating),
      date: new Date().toISOString().split('T')[0],
      text: newComment,
      verified: true
    };
    setReviewsList([item, ...reviewsList]);
    setNewReviewer('');
    setNewComment('');
    showToast("Sharhingiz chop etildi! Rahmat.", 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center mx-auto mb-2">
          <Star className="w-7 h-7 fill-current" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">{t('reviewsTitle')}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">{t('reviewsSub')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submit Review Form */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4 h-fit">
          <h3 className="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            Fikr Qoldirish
          </h3>

          <form onSubmit={handleSubmitReview} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                Ismingiz
              </label>
              <input
                type="text"
                required
                value={newReviewer}
                onChange={(e) => setNewReviewer(e.target.value)}
                placeholder="F.I.SH."
                className="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                Baho (Yulduzcha)
              </label>
              <select
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white font-bold"
              >
                <option value="5">⭐⭐⭐⭐⭐ 5 - A'lo</option>
                <option value="4">⭐⭐⭐⭐ 4 - Yaxshi</option>
                <option value="3">⭐⭐⭐ 3 - Qoniqarli</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                Sharhingiz
              </label>
              <textarea
                rows="3"
                required
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Xaridingiz haqida sharh yozing..."
                className="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Yuborish
            </button>
          </form>
        </div>

        {/* Reviews Feed */}
        <div className="lg:col-span-2 space-y-4">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">{rev.name}</h4>
                  {rev.verified && (
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Xarid tasdiqlangan
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-gray-400">{rev.date}</span>
              </div>

              <div className="flex text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
