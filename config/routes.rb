Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # resources :pages, only: [:try]
  # get 'testpfive', to: 'pages#testpfive', as: :testpfive
  # get 'testhome', to: 'pages#testhome', as: :testhome
  # get 'testproject', to: 'pages#testproject', as: :testproject
  # get 'testpfive/:id', to: 'pages#testpfive'

  # get "projects/:id/shapes", to: "projects#get_shapes"

  # Defines the root path route ("/")
  # root "articles#index"
  resources :projects, only: [:index, :show, :create, :update, :destroy]
  resources :shapes, only: [:create, :destroy]

#   resources :projects do
#     member do
#       get 'music'
#     end
#   end
end
