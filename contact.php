<?php
/* Formulaire de contact : reçoit le JSON envoyé par js/main.js et l'envoie par e-mail.
   Hébergement Infomaniak : la fonction mail() de PHP passe par leur serveur d'envoi. */

const TO   = "contact@pierre-matthey.ch";
const FROM = "contact@pierre-matthey.ch";   // doit être une adresse du domaine
const WAIT = 30;                            // secondes minimum entre deux envois d'une même IP

header("Content-Type: application/json; charset=utf-8");
function out($code, $ok){ http_response_code($code); echo json_encode(["ok" => $ok]); exit; }

if ($_SERVER["REQUEST_METHOD"] !== "POST") out(405, false);

$d = json_decode(file_get_contents("php://input"), true);
if (!is_array($d)) out(400, false);

// Piège à robots : champ caché rempli = spam, on fait semblant que tout va bien
if (!empty($d["_gotcha"])) out(200, true);

$clean = fn($s, $max) => mb_substr(trim(str_replace(["\r", "\n"], " ", (string)($s ?? ""))), 0, $max);
$type    = $clean($d["type"] ?? "", 60);
$name    = $clean($d["name"] ?? "", 120);
$email   = $clean($d["email"] ?? "", 200);
$company = $clean($d["company"] ?? "", 160);
$message = mb_substr(trim((string)($d["message"] ?? "")), 0, 8000);

if ($name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) out(422, false);

// Limite d'envoi par IP
$lock = sys_get_temp_dir() . "/pm_contact_" . md5($_SERVER["REMOTE_ADDR"] ?? "");
if (is_file($lock) && time() - filemtime($lock) < WAIT) out(429, false);
@touch($lock);

$subject = "[Portfolio] " . ($type ? "[$type] " : "") . $name . ($company ? " — $company" : "");
$body = "Nouveau message depuis pierre-matthey.ch\n\n"
      . "Type : $type\nNom : $name\nE-mail : $email\n"
      . ($company ? "Entreprise : $company\n" : "")
      . "\n----------------------------------------\n\n$message\n";

$headers = implode("\r\n", [
  "From: Portfolio <" . FROM . ">",
  "Reply-To: $name <$email>",
  "MIME-Version: 1.0",
  "Content-Type: text/plain; charset=utf-8",
  "Content-Transfer-Encoding: 8bit",
]);

$ok = mail(TO, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, $headers, "-f" . FROM);
out($ok ? 200 : 500, $ok);
