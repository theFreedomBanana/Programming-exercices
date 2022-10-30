#!/bin/bash
 
clear
echo 
echo "#################### Script ############################"
echo 
echo "#############################"
echo -n "LOGIN: "
read login
echo -n "Hôte: "
read hote
echo "#############################"
echo
echo "### Pour l'aide tapez help ###"
echo 
while [ 1 ]; do                                 # permet une boucle infinie
echo -n ""$login"@"$hote"$ "                    # qui s'arrête avec break
read reps
 
case $reps in
  help | hlp )
     echo "À propos de TS --> about"
     echo "ls --> liste les fichiers"
     echo "rm --> détruit un fichier (guidé)"
     echo "rmd --> efface un dossier (guidé)"
     echo "noyau --> version du noyau Linux"
     echo "connect --> savoir qui s'est connecté dernièrement";;
  ls )
     ls -la;;
  rm )
     echo -n "Quel fichier voulez-vous effacer : "
     read eff
     rm -f $eff;;
  rmd | rmdir )
     echo -n "Quel répertoire voulez-vous effacer : "
     read eff
     rm -r $eff;;
  noyau | "uname -r" )
     uname -r;;
  connect )
     last;;
  about | --v | vers )
     echo "Script simple pour l'initiation aux scripts shell";;
  quit | "exit" )
     echo Au revoir!!
     break;;
  * )
    echo "Commande inconnue";;
esac
done
