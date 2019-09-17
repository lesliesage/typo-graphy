Rails.application.routes.draw do
  resources :snippets, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  resources :users, only: [:index, :new, :create, :edit, :update, :destroy]
  resources :tests, only: [:index, :create]
  resources :languages, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  resources :bookmarks, only: [:index, :new, :create, :show, :destroy]
  resources :help_articles, only: [:index, :show]

  get '/users/:username', to: 'users#show'
  get '/token', to: 'users#token'
  get '/queue', to: 'snippets#queue'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
