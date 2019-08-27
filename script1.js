Vue.filter('date',time=>moment(time).format('DD/MM/YY,HH:mm'))
new Vue({
	el:'#notebook',
	data(){
		return{
			notes:JSON.parse(localStorage.getItem('notes')) || [],
			selectedId:localStorage.getItem('selected-id')||null,
		}
	},
	computed:{
		selectedNote () {
      		return this.notes.find(note => note.id === this.selectedId)
    	},

    	notePreview () {
      		return this.selectedNote ? marked(this.selectedNote.content) : ''
    	},
    	sortedNotes(){
    		return this.notes.slice().sort((a,b)=>a.created-b.created).sort((a,b)=>(a.favorite===b.favorite)?0:a.favorite?-1:1)
    	 },
	},
	watch:{
		notes:{
			handler:'saveNotes',
			deep:true,
		},
		selectedId(val){
			localStorage.setItem('selected-id',val)
		},
	},
	methods:{
		//添加笔记
		addNote(){
			const time=Date.now()
			const note={
				id:String(time),
				title:'笔记'+(this.notes.length+1),
				content:'使用**markdown**语法开始编辑笔记吧！',
				created:time,
				favorite:false,
			}
			this.notes.push(note)
			this.selectNote(note)
		},
		selectNote(note){
			this.selectedId=note.id
		},
		saveNotes(){
			localStorage.setItem('notes',JSON.stringify(this.notes))
			console.log('Notes saved!',new Date())
		},
		//删除笔记
		removeNote(){
			if(this.selectedNote&&confirm('Delete the note?')){
				const index=this.notes.indexOf(this.selectedNote)
				if(index!==-1){
					this.notes.splice(index,1)
				}
			}
		},
		favoriteNote(){
			this.selectedNote.favorite^=true
		},
	},
	created(){
			this.content=localStorage.getItem('content')||'You can write in ** markdown ** '
	},
})

