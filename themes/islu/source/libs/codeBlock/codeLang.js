$(function(){var $highlight_lang=$('<div class="code_lang" title="代码语言"></div>');$("pre").before($highlight_lang);$("pre").each(function(){var code_language=$(this).attr("class");if(!code_language){return true}var lang_name=code_language.replace("line-numbers","").trim().replace("language-","").trim();$(this).siblings(".code_lang").text(lang_name)})});