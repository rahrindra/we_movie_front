# Étape 1 : Utiliser une image de base pour node (pour construire le projet)
FROM node:16-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package.json package-lock.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers du projet dans le répertoire de travail
COPY . .

# Construire le projet Vite (cela va générer un dossier 'dist')
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir le contenu statique
FROM nginx:alpine

# Copier les fichiers de construction (le dossier 'dist') dans le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
