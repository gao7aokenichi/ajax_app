class PostsController < ApplicationController
  def index
    #メモの順番を降順に
    @posts = Post.all.order(id: "DESC")
  end
  #削除
  #def new
  #end

  def create
    Post.create(content: params[:content])
  #メモを保存した後にトップページへリダイレクトされる
  redirect_to action: :index
  end
end