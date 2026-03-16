const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..");

const config = getDefaultConfig(projectRoot);

// ให้ Metro เห็น folder นอก project
config.watchFolders = [workspaceRoot];

// ให้ Metro อ่าน symlink ของ pnpm
config.resolver.unstable_enableSymlinks = true;

// ช่วย resolve node_modules จาก workspace
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
});
