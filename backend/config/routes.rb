Rails.application.routes.draw do
  resources :snippets, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  resources :users, only: [:new, :create, :edit, :update, :destroy]
  resources :tests, only: [:index, :create]
  # resources :languages, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  # resources :bookmarks, only: [:index, :new, :create, :show, :destroy]
  resources :help_articles, only: [:index, :show]

  get '/queue', to: 'snippets#queue'
  get '/medians', to: 'tests#medians'
  get '/signup', to: 'users#create'
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#show'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
