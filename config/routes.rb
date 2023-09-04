Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # resources :pages, only: [:try]
  get 'testpfive', to: 'pages#testpfive', as: :testpfive
  get 'testhome', to: 'pages#testhome', as: :testhome
  get 'testproject', to: 'pages#testproject', as: :testproject
  # Defines the root path route ("/")
  # root "articles#index"
  resources :projects, only: [:index, :show, :create]
  resources :shapes, only: [:create]

  resources :projects do
    member do
      get 'music'
    end
  end

end
