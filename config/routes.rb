Rails.application.routes.draw do
  root to: 'posts#index' # ←編集
  # get 'posts/new', to: 'posts#new' ←削除
  post 'posts', to: 'posts#create'
  #メモのidを取得できるようにルーティングに設定
  #get 'posts', to: 'posts#checked'
  #pathパラメーターで扱えるように修正
  get 'posts/:id', to: 'posts#checked'
end