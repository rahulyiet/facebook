if (self.CavalryLogger) { CavalryLogger.start_js(["6tewf"]); }

__d("ComposerNUXType",[],(function a(b,c,d,e,f,g){f.exports={CAMERA_NUX:"camera_nux_seen",ADD_MORE_NUX:"add_more_nux_seen",OGCOMPOSER_NUX:"ogcomposer_nux_seen",FACEREC_SUGGESTIONS_NUX:"facerec_suggestions_nux_seen",TAGGING_FLYOUT_NUX:"tagging_flyout_nux_seen",SHARER_MINUTIAE_NUX:"sharer_minutiae_nux_seen",ADD_STICKERS_NUX:"add_stickers_nux_seen",UPCOMING_BIRTHDAYS_NUX:"upcoming_birthdays_nux_seen",CROSS_POST_NUX:"cross_post_nux_seen",SLIDESHOW_NUX:"slideshow_nux_seen"};}),null);
__d('CircularProgressBar.react',['cx','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'CircularProgressBar',propTypes:{percentComplete:i.number.isRequired},render:function k(){var l=360*this.props.percentComplete/100,m=Math.max(l,180)-180,n=Math.min(l,180),o=this.props.percentComplete<100?'1':'0';return c('React').createElement('div',{className:"_1_bj",style:{opacity:o}},c('React').createElement('div',{className:"_1_bk"},c('React').createElement('div',{className:"_1_bl",style:{opacity:o}}),c('React').createElement('div',{className:"_1_bp _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+m+'deg)',opacity:o}})),c('React').createElement('div',{className:"_1_bs _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+n+'deg)',opacity:o}}))));}});f.exports=j;}),null);
__d('createMentionEntity',['DraftEntity'],(function a(b,c,d,e,f,g){function h(i){var j=i.getType().toLowerCase();if(j==='hashtag')return c('DraftEntity').create('HASHTAG','IMMUTABLE');var k=j==='user'||j==='fb4c'?'SEGMENTED':'IMMUTABLE',l=i.getAuxiliaryData();return c('DraftEntity').create('MENTION',k,{id:i.getUniqueID(),isWeak:l&&l.renderType==='non_member',type:j});}f.exports=h;}),null);
__d('MentionsInput.react',['cx','invariant','AbstractMentionsTextEditor.react','EditorState','Event','MentionsLayer.react','React','ReactDOM','createMentionEntity','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.blur=function(){this.refs.textEditor.blur();}.bind(this),this.focus=function(){this.refs.textEditor&&this.refs.textEditor.focus();}.bind(this),this.click=function(){var s=c('ReactDOM').findDOMNode(this);s||i(0);s.dispatchEvent(new (c('Event'))('focus'));}.bind(this),o;}m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,"_5yk1");return c('React').createElement('div',{className:n,onClick:this.click,onFocus:this.focus,role:'presentation'},c('React').createElement(c('AbstractMentionsTextEditor.react'),babelHelpers['extends']({},this.props,{mentionResultsComponent:c('MentionsLayer.react'),mentionResultsProps:{typeaheadView:this.props.typeaheadView,typeaheadViewProps:this.props.typeaheadViewProps,offset:this.props.offset,autoflip:this.props.autoflip,position:this.props.position},mentionCreationFn:c('createMentionEntity'),ref:'textEditor',className:"_5yk2",stripPastedStyles:this.props.stripPastedStyles})));};m.propTypes={editorState:l.instanceOf(c('EditorState')).isRequired,mentionsSource:l.object,typeaheadView:l.func.isRequired,typeaheadViewPropTypes:l.object,spellCheck:l.bool,placeholder:l.string,className:l.string,autoflip:l.bool,position:l.oneOf(['above','below']),renderEmoji:l.bool,webDriverTestID:l.string,handleContentReturn:l.func,handleDroppedFiles:l.func,handlePastedFiles:l.func,onAddMention:l.func,onShowMentions:l.func,onChange:l.func,onInputFocus:l.func,onInputBlur:l.func,stripPastedStyles:l.bool};m.defaultProps={stripPastedStyles:true};f.exports=m;}),null);
__d("createExponentialMovingAverage",[],(function a(b,c,d,e,f,g){function h(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l;return function(n){return m+=k*(n-m);};}function i(k){return function(l){return 1-Math.exp(-l/k);};}function j(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l,n=i(k);return function(o,p){return m+=n(p)*(o-m);};}h.createContinuous=j;f.exports=h;}),null);
__d('VelocityTracker',['createExponentialMovingAverage','performanceNow'],(function a(b,c,d,e,f,g){function h(){var i=arguments.length<=0||arguments[0]===undefined?50:arguments[0],j=arguments.length<=1||arguments[1]===undefined?{x:0,y:0}:arguments[1];'use strict';this.$VelocityTracker5=j.x;this.$VelocityTracker6=j.y;this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker2=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker5);this.$VelocityTracker3=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker6);}h.prototype.update=function(i,j){'use strict';var k=0;if(this.$VelocityTracker4){k=c('performanceNow')()-this.$VelocityTracker1;k=this.updateVelocity((i-this.$VelocityTracker4.x)*1000/k,(j-this.$VelocityTracker4.y)*1000/k);}else this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker4={x:i,y:j};return k;};h.prototype.updateVelocity=function(i,j){'use strict';var k=c('performanceNow')(),l=k-this.$VelocityTracker1;this.$VelocityTracker1=k;this.$VelocityTracker5=this.$VelocityTracker2(i,l);this.$VelocityTracker6=this.$VelocityTracker3(j,l);return l;};h.prototype.getVelocityX=function(){'use strict';return Math.trunc(this.$VelocityTracker5);};h.prototype.getVelocityY=function(){'use strict';return Math.trunc(this.$VelocityTracker6);};h.prototype.getSpeed=function(){'use strict';return Math.trunc(Math.sqrt(this.$VelocityTracker5*this.$VelocityTracker5+this.$VelocityTracker6*this.$VelocityTracker6));};f.exports=h;}),null);
__d('ReactComposerStatusActions',['ReactComposerDispatcher','ReactComposerStatusActionType','ReactComposerStatusStore'],(function a(b,c,d,e,f,g){c('ReactComposerStatusStore');h.prototype.setMentionsSource=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE,mentionsSource:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTypeaheadReporter=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER,typeaheadReporter:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_EDITOR_STATE,editorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setOriginalEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE,originalEditorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setMentions=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS,mentions:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTextLength=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerStatusActionType').SET_TEXT_LENGTH,textLength:j});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerStatusAttachmentMentionsInput.react',['cx','addEmojiInput','Arbiter','MentionsInput.react','React','ReactComponentWithPureRenderMixin','ReactComposerConfig','ReactComposerContextMixin','ReactComposerEvents','ReactComposerInit','ReactComposerTaggerType','SubscriptionsHandler','XUITypeaheadView.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('addEmojiInput')(c('MentionsInput.react')),k=c('React').createClass({displayName:'ReactComposerStatusAttachmentMentionsInput',_subscriptions:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],propTypes:{config:c('ReactComposerConfig'),mentionsSource:i.object,preventFocus:i.bool,typeaheadReporter:i.object,onChange:i.func,onFocus:i.func,onPasteFiles:i.func},componentWillUnmount:function l(){this.props.onBlur&&this.props.onBlur(this.props.editorState);this._subscriptions&&this._subscriptions.release();},componentWillMount:function l(){var m=new (c('SubscriptionsHandler'))();if(!this.props.preventFocus)m.addSubscriptions(c('Arbiter').subscribe([c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID],function(){return this.focus();}.bind(this)));this._subscriptions=m;},render:function l(){var m=this.props.config&&this.props.taggersConfig&&this.props.config.taggersConfig[c('ReactComposerTaggerType').PEOPLE],n=m&&m.typeaheadView?m.typeaheadView:c('XUITypeaheadView.react'),o=m&&m.typeaheadViewProps?m.typeaheadViewProps:{},p=Object.assign({},{typeaheadView:n,typeaheadViewProps:o,selectOnTab:false,spellCheck:true},this.props,{className:c('joinClasses')("_1mwp navigationFocus",this.props.className),editorState:this.props.editorState,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,maxResults:10});return c('React').createElement(j,babelHelpers['extends']({ref:'mentionsInput'},p,{webDriverTestID:'status-attachment-mentions-input'}));},focus:function l(){if(!c('ReactComposerInit').isInstanceMounted(this.context.composerID)){c('Arbiter').subscribeOnce([c('ReactComposerEvents').INSTANCE_MOUNTED+this.context.composerID],function(){return this.refs.mentionsInput.focus();}.bind(this));}else this.refs.mentionsInput.focus();},blur:function l(){this.refs.mentionsInput.blur();},_onAddMention:function l(m,n,o){var p=this.props.typeaheadReporter;if(p){p.reportSelect(m.getUniqueID(),m.getType(),n,o.button>=0);p.sessionEnd();p.sessionStart();}},_onShowMentions:function l(m,n){var o=this.props.typeaheadReporter;if(o)o.reportResults(m.map(function(p){return p.getUniqueID();}));},_onFocus:function l(){var m=this.props.typeaheadReporter;if(m)m.sessionStart();this.props.onFocus&&this.props.onFocus();},_onChange:function l(m){this.props.onChange&&this.props.onChange(m);},_onBlur:function l(){this.props.typeaheadReporter&&this.props.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur(this.props.editorState);}});f.exports=k;}),null);
__d('ReactComposerStatusAttachmentMentionsInputVariant.react',['cx','addEmojiToEditorState','EmojiInputButton.react','Keys','React','ReactComposerActions','ReactComposerAttachmentType','ReactComposerStatusAttachmentMentionsInput.react','ReactComposerStickerContainer','UserAgent_DEPRECATED','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('ReactComposerStickerContainer').ReactComposerStickerComponent;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(m){j.constructor.call(this,m);this.insertEmoji=function(n){c('addEmojiToEditorState')(n,this.props.editorState,this.props.onChange);}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant1=function(n){var o=/^image\//;n=n.filter(function(p){return o.test(p.type);});if(n.length>0&&this.props.onPasteFiles){this.props.onPasteFiles(n);return true;}return false;}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant2=function(event,n){var o=c('UserAgent_DEPRECATED').osx()?event.metaKey:event.ctrlKey;if(event.keyCode===c('Keys').RETURN&&o){this.blur();setTimeout(this.props.onPostIntent,0);return true;}return false;}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant3=function(){c('ReactComposerActions').expandSprouts(this.props.compositionID);}.bind(this);}l.prototype.render=function(){var m=this.props.config&&this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],n=null;if(this.props.useRichTextEditor){var o=m.richTextEditor;n=c('React').createElement(o,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_3w8y _21mu"),canAttachVideo:false,canAttachPhoto:false,canAttachEmbed:false,onSave:c('emptyFunction'),spellCheck:true,autoCorrect:false,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2,ref:'mentionsInput'}));}else n=c('React').createElement(c('ReactComposerStatusAttachmentMentionsInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,(this.props.isSelectedAttachmentActive?"_1mwq":'')+(this.props.config&&this.props.config.showExpandedComposer?' '+"_4c_p":'')+(m&&m.showProfilePic?' '+"_5bu_":'')+(this.props.isPosting?' '+"_1udp":'')+(this.props.shouldUseLargeText?' '+"_17nh":'')+(m&&m.largeTextThreshold?' '+"_34nd":'')+(' '+"_21mu")+(this.props.sticker&&this.props.sticker.stickerID?' '+"_hjn":'')),ref:'mentionsInput',readOnly:this.props.isPosting,editorState:this.props.editorState,mentionsSource:this.props.mentionsSource,typeaheadReporter:this.props.typeaheadReporter,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2}));var p="_3nc-",q="_3nc_",r="_5zq9",s=c('React').createElement(c('EmojiInputButton.react'),{buttonClassName:p,iconActiveClassName:r,iconClassName:q,onSelect:this.insertEmoji,onClick:this.$ReactComposerStatusAttachmentMentionsInputVariant3}),t=null;if(k)t=c('React').createElement(k,{sticker:this.props.sticker,composerID:this.props.compositionID});return c('React').createElement('div',{className:"_3nd0"},t,n,s);};l.prototype.blur=function(){this.refs.mentionsInput.blur();};l.prototype.focus=function(){this.refs.mentionsInput.focus();};f.exports=l;}),null);
__d('ReactComposerStatusAttachmentMentionsInputContainer.react',['Arbiter','EditorState','LitestandStoryInsertionStatus','React','ReactComponentWithPureRenderMixin','ReactComposerActions','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerContextMixin','getReactComposerEmojiInputDecorator','ReactComposerEvents','ReactComposerHandleUnsavedChanges','ReactComposerInputDecorator','ReactComposerMediaUploadStore','ReactComposerMinutiaeAttachmentStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputVariant.react','ReactComposerStatusStore','ReactComposerStatusUtils','ReactComposerStore','ReactComposerTaggerStore','ReactComposerTaggerType','UnicodeUtils','ifRequired'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=function k(l,m){var n=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l);if(n===c('ReactComposerAttachmentType').LIVE_VIDEO||n===c('ReactComposerAttachmentType').SELL)return false;var o=m&&m.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=c('ReactComposerTaggerStore').hasMarkdown(l);return !!(o&&o.richTextEditor&&!p);},j=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputContainer',_rerenderSubscription:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'),c('ReactComposerMediaUploadStore'),c('ReactComposerMinutiaeAttachmentStore'),c('ReactComposerScrapedAttachmentStore'),c('ReactComposerStatusStore'),c('ReactComposerStore'),c('ReactComposerTaggerStore'))],propTypes:{config:c('ReactComposerConfig'),mentionsEnabled:h.bool,mentionsSource:h.object,onChange:h.func,onFocus:h.func,onPasteFiles:h.func,handlePastedText:h.func},getDefaultProps:function k(){return {mentionsEnabled:true};},getInitialState:function k(){return {isFocused:false};},statics:{calculateState:function k(l,m){var n=c('ReactComposerStatusStore').getEditorState(l),o=m.config&&m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=false,q=c('ReactComposerStatusStore').getTextLength(l),r=c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),s=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l),t=i(l,m.config),u=c('ReactComposerInputDecorator').NONE;if(m.mentionsEnabled)u=o&&o.richTextEditor?c('ReactComposerInputDecorator').RICH_TEXT:c('ReactComposerInputDecorator').MENTIONS;if(o&&o.largeTextThreshold&&c('ReactComposerMediaUploadStore').getUploadsCount(l)===0&&!c('ReactComposerScrapedAttachmentStore').hasAttachment(l)&&!c('ReactComposerTaggerStore').hasExplicitLocation(l)&&!c('ReactComposerTaggerStore').hasMarkdown(l)&&c('ReactComposerMinutiaeAttachmentStore').getMarkup(l)===null&&s!==c('ReactComposerAttachmentType').SELL){if(!q&&n){var v=n.getCurrentContent();q=c('UnicodeUtils').strlen(v.getPlainText());}var w=m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS].placeholderText;if(w&&w.length<=o.LargePlaceholderTextThreshold&&q===0&&r||q!==0&&q<=o.largeTextThreshold)p=true;c('ifRequired')('ReactComposerFormattedTextStore',function(z){var aa=z.getSelectedIndex(l);if(aa>-1){p=true;u=m.mentionsEnabled?c('ReactComposerInputDecorator').MENTIONS:c('ReactComposerInputDecorator').NONE;t=false;}});}var x=c('getReactComposerEmojiInputDecorator')(u,p&&!t?28:16),y;if(n){if(n.getDecorator()!==x){y=c('EditorState').set(n,{decorator:x});c('ReactComposerStatusActions').setEditorState(l,y);}else y=n;}else{y=c('EditorState').createEmpty(x);c('ReactComposerStatusActions').setEditorState(l,y);}return {editorState:y,isSelectedAttachmentActive:c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),mentionsSource:m.mentionsEnabled?c('ReactComposerStatusStore').getMentionsSource(l):null,posting:c('ReactComposerStore').isPosting(l),typeaheadReporter:c('ReactComposerStatusStore').getTypeaheadReporter(l),shouldUseLargeText:p,selectedSticker:c('ReactComposerTaggerStore').getTaggerData(l,c('ReactComposerTaggerType').STICKER),useRichText:t};}},componentWillMount:function k(){if(this.props.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,this.props.mentionsSource);this._storyInsertionBlocker=c('LitestandStoryInsertionStatus').registerBlocker(function(){return c('ReactComposerHandleUnsavedChanges').hasUnsavedChanges(this.context.composerID)||this.state.isFocused;}.bind(this));},componentDidMount:function k(){var l=c('ReactComposerStatusStore').getEditorState(this.context.composerID);if(this.state.editorState!==l){this._pendingEditorStateUpdateFromMount=l;this.setState({editorState:l},function(){this._pendingEditorStateUpdateFromMount=undefined;}.bind(this));}this._rerenderSubscription=c('Arbiter').subscribe(c('ReactComposerEvents').RERENDER_MENTION_INPUT+this.context.composerID,function(){this.setState({editorState:c('ReactComposerStatusStore').getEditorState(this.context.composerID)});}.bind(this));},componentWillReceiveProps:function k(l){if(this.props.mentionsSource!==l.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,l.mentionsSource);if(l.editorState===null){var m=c('EditorState').createEmpty(c('getReactComposerEmojiInputDecorator')(c('ReactComposerInputDecorator').MENTIONS));c('ReactComposerStatusActions').setEditorState(this.context.composerID,m);this.setState({editorState:m});}},componentWillUnmount:function k(){this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;this._storyInsertionBlocker&&this._storyInsertionBlocker.unsubscribe();this._storyInsertionBlocker=null;this._rerenderSubscription&&this._rerenderSubscription.unsubscribe();},render:function k(){return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputVariant.react'),babelHelpers['extends']({},this.props,{compositionID:this.context.composerID,editorState:this.state.editorState,isSelectedAttachmentActive:this.state.isSelectedAttachmentActive,isPosting:this.state.posting,mentionsSource:this.state.mentionsSource,onBlur:this._onBlur,onChange:this._onChange,onFocus:this._onFocus,onPostIntent:this._onPostIntent,ownerID:this.context.actorID,ref:'mentionsInput',shouldUseLargeText:this.state.shouldUseLargeText,typeaheadReporter:this.state.typeaheadReporter,useRichTextEditor:this.state.useRichText,sticker:this.state.selectedSticker}));},focus:function k(){this.refs.mentionsInput.focus();if(this._pendingEditorStateUpdateFromMount!==undefined)this.setState({editorState:this._pendingEditorStateUpdateFromMount},function(){return this.refs.mentionsInput.focus();}.bind(this));},_onFocus:function k(){c('Arbiter').inform(c('ReactComposerEvents').MENTION_INPUT_FOCUS+this.context.composerID);this.setState({isFocused:true});this.props.onFocus&&this.props.onFocus();},_onChange:function k(l){if(this._pendingEditorStateUpdateFromMount!==undefined)return;var m=0;if(l){var n=l.getCurrentContent();m=n?c('UnicodeUtils').strlen(n.getPlainText()):0;if(c('ReactComposerStatusStore').getEditorState(this.context.composerID)!==l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);c('ReactComposerStatusActions').setTextLength(this.context.composerID,m);}}this._handleMarkdownChange(l);this.props.onChange&&this.props.onChange(l);this.setState({editorState:l});},_handleMarkdownChange:function k(l){var m=this.props.config?this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS]:null;c('ReactComposerStatusUtils').handleMarkdownPreview(this.context.composerID,this.context.targetID,m?m.markdownPreviewAttachment:null,l);},_onBlur:function k(l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);this.setState({isFocused:false});},_onPostIntent:function k(){c('ReactComposerActions').postIntended(this.context.composerID,{actorID:this.context.actorID,config:this.props.config,targetID:this.context.targetID});}});f.exports=j;}),null);
__d('ReactComposerStatusAttachmentMentionsInputWithTagExpansionContainer.react',['cx','DraftEntity','React','ReactComponentWithPureRenderMixin','ReactComposerContextMixin','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputContainer.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputWithTagExpansionContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],render:function j(){var k=c('joinClasses')(this.props.className,"_395");return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputContainer.react'),babelHelpers['extends']({},this.props,{className:k,onChange:this._onChange,ref:'mentionsInput'}));},focus:function j(){this.refs.mentionsInput.focus();},insertEmoji:function j(k){this.refs.mentionsInput.insertEmoji(k);},_onChange:function j(k){c('ReactComposerStatusActions').setMentions(this.context.composerID,this._getMentionsFromEditorState(k));this.props.onChange&&this.props.onChange(k);},_getMentionsFromEditorState:function j(k){var l=k.getCurrentContent(),m={};l.getBlockMap().forEach(function(n){var o=n.getText();n.findEntityRanges(function(){return true;},function(p,q){var r=n.getEntityAt(p);if(!r)return;var s=l.getEntity(r);if(s.getType()!=='MENTION'||s.getData().type!=='user')return;var t=s.getData().id;m[t]={type:'user',uid:t,text:o.slice(p,q),isWeak:s.getData().isWeak};});});return m;}});f.exports=i;}),null);
__d('ReactComposerMultilingualStatusActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({MOUNTED_MULTILINGUAL_STATUS:null,MULTILINGUAL_PROMPT_CLICK:null,MULTILINGUAL_PROMPT_CLOSE:null,LANGUAGE_CREATED:null,LANGUAGE_CHANGED:null,LANGUAGE_REMOVED:null,SET_LANGUAGE_EDITOR_STATE:null,SET_SPECIFIED_POST_LANGUAGE:null,PREFILL_MULTILINGUAL_DATA:null},'ReactComposerMultilingualStatusActionType');}),null);
__d('MentionsInputUtility',['DraftEntity','UnicodeUtils','createEditorStateWithEntities','sanitizeDraftText'],(function a(b,c,d,e,f,g){var h=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/g),i=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/g),j=function m(n){var o=c('sanitizeDraftText')(n),p=o.replace(i,'@[$1:$3]'),q=[],r;while(r=h.exec(p)){var s=r[2].replace(/\\:/g,':').replace(/\\]/g,']').replace(/\n/g,''),t={uid:r[1],text:s,offset:r.index,length:s.length,weakreference:false,entity:{uid:r[1],weakreference:false}};q.push(t);p=p.substr(0,t.offset)+t.text+p.substr(t.offset+r[0].length);h.lastIndex=t.offset+t.length;}return {text:p,ranges:q};};function k(m,n){var o=0,p=0;n.forEach(function(q){var r=void 0,s=void 0;r=q.offset;s=m.slice(o,r);p+=s.length-c('UnicodeUtils').strlen(s);o=r;var t=r-p;r=q.offset+q.length;s=m.slice(o,r);p+=s.length-c('UnicodeUtils').strlen(s);o=r;var u=r-p;q.offset=t;q.length=u-t;});}function l(m,n){var o=j(m),p=o.text,q=o.ranges;k(p,q);return c('createEditorStateWithEntities')({text:p,ranges:q,decorator:n,entityCreationFn:function r(s){return c('DraftEntity').create('MENTION','IMMUTABLE',{id:s.uid,isWeak:s.weakreference});},splitIntoBlocks:true,allowUndo:true});}f.exports={createFromTextWithMentions:l};}),null);
__d('ReactComposerMultilingualStatusStore',['immutable','MentionsInputUtility','ReactComposerMultilingualStatusActionType','ReactComposerStoreBase','getMentionsInputDecorator','getMentionsTextForContentState'],(function a(b,c,d,e,f,g){var h,i,j=c('immutable').Record({languageDialect:null,editorState:null});h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return {statuses:c('immutable').List(),specifiedPostLanguage:''};},function(m){switch(m.type){case c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS:l&&l.$ReactComposerMultilingualStatusStore1(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED:l&&l.$ReactComposerMultilingualStatusStore2(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED:l&&l.$ReactComposerMultilingualStatusStore3(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED:l&&l.$ReactComposerMultilingualStatusStore4(m);break;case c('ReactComposerMultilingualStatusActionType').SET_LANGUAGE_EDITOR_STATE:l&&l.$ReactComposerMultilingualStatusStore5(m);break;case c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE:l&&l.$ReactComposerMultilingualStatusStore6(m);break;case c('ReactComposerMultilingualStatusActionType').PREFILL_MULTILINGUAL_DATA:l&&l.$ReactComposerMultilingualStatusStore7(m);break;}});l=this;}k.prototype.getAllPostDialects=function(l){'use strict';var m=this.getLanguageDialects(l);m.push(this.getSpecifiedPostLanguage(l));return m;};k.prototype.getSpecifiedPostLanguage=function(l){'use strict';return this.getComposerData(l).specifiedPostLanguage;};k.prototype.getLanguageDialects=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.languageDialect;}).toArray();};k.prototype.getEditorStates=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.editorState;}).toArray();};k.prototype.getMessages=function(l){'use strict';return this.getStatuses(l).map(function(m){return this.$ReactComposerMultilingualStatusStore8(m);}.bind(this)).toArray();};k.prototype.getMessage=function(l,m){'use strict';var n=this.getStatus(l,m);return this.$ReactComposerMultilingualStatusStore8(n);};k.prototype.getStatuses=function(l){'use strict';return this.getComposerData(l).statuses;};k.prototype.getStatus=function(l,m){'use strict';var n=this.getComposerData(l),o=this.$ReactComposerMultilingualStatusStore9(n.statuses,m);return n.statuses.get(o);};k.prototype.getPostData=function(l){'use strict';var m=this.getMessages(l);if(m.length===0)return {};return {multilingual_specified_lang:this.getSpecifiedPostLanguage(l),multilingual_status_langs:this.getLanguageDialects(l),multilingual_statuses:m};};k.prototype.$ReactComposerMultilingualStatusStore9=function(l,m){'use strict';var n=l.findIndex(function(o){return o.languageDialect===m;});if(n===-1)throw new Error('Undefined status language dialect: '+m);return n;};k.prototype.$ReactComposerMultilingualStatusStore8=function(l){'use strict';var m=l.editorState.getCurrentContent();return c('getMentionsTextForContentState')(m);};k.prototype.$ReactComposerMultilingualStatusStore2=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','languageConfig']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=new j({languageDialect:o,editorState:p.editorState});q.statuses=q.statuses.push(r);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore3=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n),q=this.$ReactComposerMultilingualStatusStore9(p.statuses,o);p.statuses=p.statuses.splice(q,1);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore4=function(l){'use strict';var m=this.validateAction(l,['composerID','oldLanguageDialect','newLanguageDialect']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:p,editorState:q.statuses.get(r).editorState}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','editorState']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:o,editorState:p}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore1=function(l){'use strict';this.$ReactComposerMultilingualStatusStore6(l);};k.prototype.$ReactComposerMultilingualStatusStore6=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o;this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore7=function(l){'use strict';var m=this.validateAction(l,['composerID','multilingualData']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o.specifiedDialect;o.multilingualStatuses.forEach(function(q){p.statuses=p.statuses.push(new j({languageDialect:q.dialect,editorState:c('MentionsInputUtility').createFromTextWithMentions(q.message,c('getMentionsInputDecorator')())}));});this.emitChange(n);};f.exports=new k();}),null);
__d('getViewerRecordID',['RelayStore'],(function a(b,c,d,e,f,g){'use strict';var h=c('RelayStore').getStoreData();function i(){return h.getCachedStore().getDataID('viewer');}f.exports=i;}),null);
__d('getErrorNameFromWebGLErrorCode',[],(function a(b,c,d,e,f,g){var h={'0':'NO_ERROR','1280':'INVALID_ENUM','1281':'INVALID_VALUE','1282':'INVALID_OPERATION','1285':'OUT_OF_MEMORY','1286':'INVALID_FRAMEBUFFER_OPERATION','37442':'CONTEXT_LOST_WEBGL'};function i(j){if(!(j in h))return 'UNKNOWN_ERROR';return h[j];}f.exports=i;}),null);