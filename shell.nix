let pkgs = import <nixpkgs> {};

in pkgs.mkShell {
  name        = "dev-shell";
  buildInputs = with pkgs; [ nodejs ];
}
