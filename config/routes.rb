Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # resources :pages, only: [:try]
  get 'testp5', to: 'pages#testp5', as: :testp5
  get 'testhome', to: 'pages#testhome', as: :testhome
  get 'testproject', to: 'pages#testproject', as: :testproject
  # Defines the root path route ("/")
  # root "articles#index"
end
