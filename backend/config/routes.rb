Rails.application.routes.draw do
  resources :snippets, only: [:index]
  get '/queue', to: 'snippets#queue'
  
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#show'
  put '/profile', to: 'users#update'
  delete '/profile', to: 'users#destroy'
  
  resources :tests, only: [:create]
  get '/medians', to: 'tests#medians'

  resources :help_articles, only: [:index]

  post '/login', to: 'auth#create'
end
