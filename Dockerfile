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

# Construire le projet React
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir le contenu statique
FROM nginx:alpine

# Copier les fichiers de construction (le dossier 'build') dans le répertoire Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]