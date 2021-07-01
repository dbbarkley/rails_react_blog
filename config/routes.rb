Rails.application.routes.draw do
  resources :blogs
  root :to => 'blogs#index'
  match '*path', to: 'blogs#index', via: :all
end
